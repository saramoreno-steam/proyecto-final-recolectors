input.onButtonPressed(Button.A, function on_button_pressed_a() {
    pins.digitalWritePin(DigitalPin.P10, 0)
    servos.P2.setAngle(0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    pins.digitalWritePin(DigitalPin.P10, 1)
    servos.P2.setAngle(100)
})
let Humedad = 0
let Lluvia = 0
pins.digitalWritePin(DigitalPin.P10, 0)
servos.P2.setAngle(0)
basic.showIcon(IconNames.Heart)
basic.pause(3000)
basic.forever(function on_forever() {
    
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
