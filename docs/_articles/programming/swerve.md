---
layout: base
title:  Swerve
permalink: /programming/swerve
nav_order: 1
---
# Swerve

In this guide, we will walk through the first steps for creating a usable swerve drive. The first of these steps is to create a subsystem to store swerve modules.&#x20;

## Creating the Objects

The first step in making the Swerve module class is to create all of the objects that you will need:

```java
private CANSparkMax angleMotor;
private CANSparkFlex driveMotor;

private CANcoder canCoder;
private RelativeEncoder driveEncoder;

private PIDController angleController;
private SparkPIDController drivingPidController;

private SwerveModulePosition prevPosition;

private double offset;
```

The first two objects are the Drive motors. The type of motor object that we use will depend on the type of motor mounted on the robot. For any further info consult [Motor Controllers](https://app.nuclino.com/t/b/7572f3be-36ea-489a-a519-7fad9a04e690?n).

```java
private CANSparkMax angleMotor;
private CANSparkFlex driveMotor;
```

The second two objects are the encoders that we use for controlling the motors. The first is the rotation CanCoder mounted on the top of the module and gives us data on the the rotation of the wheel. The second is the drive motor encoder which tells us the relative speed of the drive motor. For any more questions consult [Encoders](https://app.nuclino.com/t/b/606da02b-0873-4549-8fab-55ee90987463?n).&#x20;

```java
private CANcoder canCoder;
private RelativeEncoder driveEncoder;
```

The third two objects are the PID controllers. These are used to more accurately control the rotation and drive functions of the module. For any questions consult [How to PID](https://app.nuclino.com/t/b/49a5bdf9-ae8a-4db4-8fe3-8b7a326ea4f5?n).

```java
private PIDController angleController;
private SparkPIDController drivingPidController;
```

&#x20;Fourth, we use a object called a Swerve module position. This records the angle and relative speed of the module as a module state.&#x20;

```java
private SwerveModulePosition prevPosition;
```

Finally, we set an offset on the rotation motor to make sure it points forward.&#x20;

```java
private double offset;
```

## Writing the main class

This second step is to write the actual class for the swerve module.&#x20;

```java
public SwerveModule(int angleMotorID, int driveMotorID, int encoderPort, double offset, 
                      boolean driveMotorReversed, boolean angleMotorReversed) {
    angleMotor = new CANSparkMax(angleMotorID, MotorType.kBrushless);
    driveMotor = new CANSparkFlex(driveMotorID, MotorType.kBrushless);
    
    angleMotor.setIdleMode(IdleMode.kBrake);
    driveMotor.setIdleMode(IdleMode.kBrake);
    
    this.angleMotor.setInverted(angleMotorReversed);
    this.driveMotor.setInverted(driveMotorReversed);
    
    this.driveMotor.setSmartCurrentLimit(KDriveMotorCurrentLimit); // CURRENTLY 85! NEEDS TESTING
    this.angleMotor.setSmartCurrentLimit(KAngleMotorCurrentLimit); // 40

    canCoder = new CANcoder(encoderPort);

    MagnetSensorConfigs canCoderConfig = new MagnetSensorConfigs();

    double offsetToRotations = offset/360;

    canCoderConfig.AbsoluteSensorRange = AbsoluteSensorRangeValue.Signed_PlusMinusHalf;
    canCoderConfig.SensorDirection = SensorDirectionValue.CounterClockwise_Positive;
    canCoderConfig.MagnetOffset = offsetToRotations;
    canCoder.getConfigurator().apply(canCoderConfig);

    // driveEncoder = driveMotor.getExternalEncoder(Type.kQuadrature, 1);
    driveEncoder = driveMotor.getEncoder();
    
    driveEncoder.setPositionConversionFactor(KDriveMotorRotToMeter);
    driveEncoder.setVelocityConversionFactor(KDriveMotorRPMToMetersPerSec);

    
    angleController = new PIDController(KAngleP, 0, KAngleD);
    angleController.enableContinuousInput(-180, 180); 
      // Tells PIDController that 180 deg is same in both directions

    drivingPidController = driveMotor.getPIDController();
    drivingPidController.setP(KDrivingPidP);
    drivingPidController.setI(KDrivingPidI);
    drivingPidController.setD(KDrivingPidD);
    drivingPidController.setFF(1/KNeoVortexMaxRPM);
    drivingPidController.setOutputRange(-1, 1);
  }
```

The first step of this is to set up the motor controllers. This has three steps, setting the motor controller to new motor controller objects, telling the motors whether they should be inverted or not, and finally setting the motors current limit.&#x20;

```java
    angleMotor = new CANSparkMax(angleMotorID, MotorType.kBrushless);
    driveMotor = new CANSparkFlex(driveMotorID, MotorType.kBrushless);
    
    angleMotor.setIdleMode(IdleMode.kBrake);
    driveMotor.setIdleMode(IdleMode.kBrake);
    
    this.angleMotor.setInverted(angleMotorReversed);
    this.driveMotor.setInverted(driveMotorReversed);
    
    this.driveMotor.setSmartCurrentLimit(KDriveMotorCurrentLimit); 
    this.angleMotor.setSmartCurrentLimit(KAngleMotorCurrentLimit);
```

The second step is to set up for the CanCoder. The CanCoder is setup by creating a CanCoder Configuration object and applying it to the CanCoder. In order to create a config object, you need to tell the object its sensor range, sensor direction, and offset(in rotations).&#x20;

```java
    canCoder = new CANcoder(encoderPort);

    MagnetSensorConfigs canCoderConfig = new MagnetSensorConfigs();

    double offsetToRotations = offset/360;

    canCoderConfig.AbsoluteSensorRange = AbsoluteSensorRangeValue.Signed_PlusMinusHalf;
    canCoderConfig.SensorDirection = SensorDirectionValue.CounterClockwise_Positive;
    canCoderConfig.MagnetOffset = offsetToRotations;
    canCoder.getConfigurator().apply(canCoderConfig);
```

The third step is to set up the internal encoder in the drive motor. We also set the motor so it returns data in meters and meters per second.&#x20;

```java
    driveEncoder = driveMotor.getEncoder();
    
    driveEncoder.setPositionConversionFactor(KDriveMotorRotToMeter);
    driveEncoder.setVelocityConversionFactor(KDriveMotorRPMToMetersPerSec);
```

Finally we create and set the PID controllers.

```java
angleController = new PIDController(KAngleP, 0, KAngleD);
    angleController.enableContinuousInput(-180, 180); 
      // Tells PIDController that 180 deg is same in both directions

    drivingPidController = driveMotor.getPIDController();
    drivingPidController.setP(KDrivingPidP);
    drivingPidController.setI(KDrivingPidI);
    drivingPidController.setD(KDrivingPidD);
    drivingPidController.setFF(1/KNeoVortexMaxRPM);
    drivingPidController.setOutputRange(-1, 1);
```

<br>

## Setting Desired Module States

Finally, we need to actually create a function to set tahe module states. This is done using the following functions.&#x20;

```java
  public void setDesiredState(SwerveModuleState desiredState) {
    double angleMotorOutput;
    double driveMotorOutput;
    
    Rotation2d currentAngleR2D = getAngleR2D();
    desiredState = SwerveModuleState.optimize(desiredState, currentAngleR2D);
    angleMotorOutput = angleController.calculate(getAngleDeg(), desiredState.angle.getDegrees());
    
    driveMotorOutput = desiredState.speedMetersPerSecond / KPhysicalMaxDriveSpeedMPS;
    // driveMotorOutput = desiredState.speedMetersPerSecond;
    // driveMotorOutput = driveController.calculate(getDriveEncoderVel(), desiredState.speedMetersPerSecond) / KPhysicalMaxDriveSpeedMPS;
    
    angleMotor.set(angleMotorOutput);
    driveMotor.set(driveMotorOutput); 
  }

```

<br>
