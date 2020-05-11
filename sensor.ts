namespace sensor {
    export enum On_Off {
        //% block="off"
        off = 0,
        //% block="on"
        on =1
    }
	
	
    let temp = 0


    //%blockId=control_traffic_light
    //%block="control traffic light at Pin %pin|Red %out_red|Yellow %out_yellow|Blue %out_blue"
    //% weight=250
    export function control_traffic_light(pin: AnalogPin, out_red: On_Off, out_yellow: On_Off, out_blue: On_Off): void {
        temp =  2*2*out_red + 2*out_yellow + out_blue
        temp = temp*125
        pins.analogWritePin(pin, temp)
        basic.showNumber(temp)

    }



}

