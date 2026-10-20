def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P10, 0)
    servos.P2.set_angle(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P10, 1)
    servos.P2.set_angle(100)
input.on_button_pressed(Button.B, on_button_pressed_b)

Humedad = 0
Lluvia = 0
pins.digital_write_pin(DigitalPin.P10, 0)
servos.P2.set_angle(0)
basic.show_icon(IconNames.HEART)
basic.pause(3000)

def on_forever():
    global Lluvia, Humedad
    Lluvia = pins.digital_read_pin(DigitalPin.P1)
    Humedad = pins.digital_read_pin(DigitalPin.P3)
    if Humedad < 600:
        pins.digital_write_pin(DigitalPin.P10, 0)
    else:
        pins.digital_write_pin(DigitalPin.P10, 1)
    if Lluvia < 0:
        servos.P2.set_angle(0)
    else:
        servos.P2.set_angle(180)
    basic.pause(1000)
basic.forever(on_forever)
