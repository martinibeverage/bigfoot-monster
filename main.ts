input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -80)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 80)
})
basic.showIcon(IconNames.Yes)
