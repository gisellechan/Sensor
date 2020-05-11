namespace smartcity {
    export enum On_Off {
        //% block="off"
        off = 0,
        //% block="on"
        on =1
    }
	
	export enum InputPin {
        //% block="P0"
        P0 = 7,
        //% block="P1"
        P1 = 8,
        //% block="P2"
        P2 = 9
    }
	
    let temp = 0
	let temp_pin=0


    //%blockId=control_traffic_light
    //%block="control traffic light at Pin %pin|Red %out_red|Yellow %out_yellow|Green %out_green"
    //% weight=250
    export function control_traffic_light(pin: AnalogPin, out_red: On_Off, out_yellow: On_Off, out_green: On_Off): void {
        temp =  2*2*out_red + 2*out_yellow + out_green
        temp = temp*125
        pins.analogWritePin(pin, temp)
        basic.showNumber(temp)

    }
	
	//%blockId=read_light_sensor
    //%block="read light sensor (intensity) at Pin %pin"
    //% weight=225
    export function read_light_sensor(pin: InputPin): number {
        temp_pin = parseInt(pin.toString())
		temp = Math.round(100 - pins.analogReadPin(temp_pin)/1023*100)
        return temp
    }

	//%blockId=read_raindrop_sensor
    //%block="read raindrop sensor (intensity) at Pin %pin"
    //% weight=200
    export function read_raindrop_sensor(pin: InputPin): number {
        temp_pin = parseInt(pin.toString())
		temp = Math.round(100 - pins.analogReadPin(temp_pin)/1023*100)
        return temp
    }

	//%blockId=read_motion_sensor
    //%block="read motion sensor (intensity) at Pin %pin"
    //% weight=180
    export function read_motion_sensor(pin: InputPin): number {
        temp_pin = parseInt(pin.toString())
		temp = Math.round(100 - pins.analogReadPin(temp_pin)/1023*100)
        return temp
    }
	
}

