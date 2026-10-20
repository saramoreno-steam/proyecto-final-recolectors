input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P10, 0)
    servos.P2.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P10, 1)
    servos.P2.setAngle(100)
})
let Humedad = 0
let Lluvia = 0
pins.digitalWritePin(DigitalPin.P10, 0)
servos.P2.setAngle(0)
basic.forever(function () {
    Lluvia = pins.digitalReadPin(DigitalPin.P1)
    Humedad = pins.digitalReadPin(DigitalPin.P3)
    if (Humedad < 600) {
        pins.digitalWritePin(DigitalPin.P10, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P10, 1)
    }
    if (Lluvia < 0) {
        servos.P2.setAngle(0)
    } else {
        servos.P2.setAngle(180)
    }
    basic.pause(1000)
})
