/*--------------参数下拉-------------------*/
/*直流马达选择*/
enum DJ {
    //% block="全部电机"
    "ALL",
    //% block="M A"
    "MA",
    //% block="M B"
    "MB"
}
enum DJ1 {
    //% block="选择需要调试的电机"
    "无",
    //% block="M A"
    "MA",
    //% block="M B"
    "MB"
}
/*数字引脚*/
enum SZ_YINJIAO {2,3,4,9,10,11,12,13,A0,A1,A2,A3}
/*PWM引脚*/
enum PWM_YINJIAO {3,9,10,11}
/*数字传感器有无信号下拉*/
enum YOUWU {
    //% block="有信号"
    0,
    //% block="无信号"
    1
}
/*按键下拉*/
enum ANZHU {
    //% block="按住"
    0,
    //% block="松开"
    1
}
/*LED打开关闭下拉*/
enum KAIGUAN {
    //% block="关闭"
    0,
    //% block="打开"
    1
}
/*LED灯亮灭下拉*/
enum liangmie {
    //% block="灭"
    0
    //% block="亮"
    1，
    
}
/*
enum DZyinjiao {
    2,
    3,
    9,
    10,
    11
}*/
/*无源蜂鸣器发声时间下拉*/
enum jiepai {
    //% block="1/2"
    500,
    //% block="1/4"
    250,
    //% block="1/8"
    125,
    //% block="整拍"
    1000,
    //% block="双拍"
    2000,
    //% block="停止"
    0,
}
/*无源蜂鸣器发声时间下拉*/
enum BF_Music {
    //% block="警报"
    0,
    //% block="生日快乐"
    1,
    //% block="小跳蛙"
    2,
}
/*PS2手柄引脚下拉*/
enum Dat {2,3,4,9,10,11,12,13,A0,A1,A2,A3}
enum Cmd {2,3,4,9,10,11,12,13,A0,A1,A2,A3}
enum Cs  {2,3,4,9,10,11,12,13,A0,A1,A2,A3}
enum Clk {2,3,4,9,10,11,12,13,A0,A1,A2,A3}
/*震动反馈*/
enum ZHENDONGFANKUI {
    //% block="开"
    true,
    //% block="关"
    false
}
/*按键*/
enum ANJIAN {
    //% block="三角形键(上)"
    PSB_GREEN,
    //% block="X键(下)"
    PSB_BLUE,
    //% block="方形键(左)"
    PSB_PINK,
    //% block="圆形键(右)"
    PSB_RED,
    //% block="方向键上"
    PSB_PAD_UP,
    //% block="方向键下"
    PSB_PAD_DOWN,
    //% block="方向键左"
    PSB_PAD_LEFT,
    //% block="方向键右"
    PSB_PAD_RIGHT,
    //% block="左侧1"
    PSB_L1,
    //% block="左侧2"
    PSB_L2,
    //% block="右侧1"
    PSB_R1,
    //% block="右侧2"
    PSB_R2,
    //% block="选择键"
    PSB_SELECT,
    //% block="开始键"
    PSB_START,
}
/*按键状态*/
enum PS2_ajzhuangtai {
    //% block="按住"
    Button,
    //% block="按下"
    ButtonPressed,
    //% block="松开"
    ButtonReleased,
    //% block="改变"
    NewButtonState,
}
/*摇杆*/
enum YAOGAN {
    //% block="右侧X值"
    PSS_RX,
    //% block="右侧Y值"
    PSS_RY,
    //% block="左侧X值"
    PSS_LX,
    //% block="左侧Y值"
    PSS_LY,
}
/*外部中断下拉*/
enum Zhong_duan_PIN {2,3}
enum ZD_moshi {
    //% block="改变"
    CHANGE,
    //% block="上升"
    RISING,
    //% block="下降"
    FALLING
}

/*定时中断下拉*/
enum dingshi_ZD_ZT {
    //% block="关闭（暂停）"
    1,
    //% block="开启（继续）"
    0
}

//% color="#3366FF" iconWidth=40 iconHeight=40  /*图标颜色#3078D8*/
namespace LBXQ1 
{
    //**************************************************//
    //--------------------输出设备----------------------//
    //*************************************************//
    /*
    //% block="【----下面是输出设备----】" blockType="hat"
    export function shuchushebei(parameter: any, block: any) 
    */


    //--------------电机误差调试模块-------------------//
    
    //% block="电机误差[DJ1][WUCHA]" blockType="command"
    //% DJ1.shadow="dropdown" DJ1.options="DJ1" DJ1.defl="DJ1.1"
    //% WUCHA.shadow="range"   WUCHA.params.min=-100    WUCHA.params.max=100    WUCHA.defl=0
    export function Motor_WuCha(parameter: any, block: any) 
    {
        let DJ1 = parameter.DJ1.code;
        let WUCHA = parameter.WUCHA.code;

        Generator.addInclude('LBXQ_1', '#include <LBXQ_1.h>');//统一分类到LBXQ
        Generator.addObject( `Motor`, `DC_Motor`,`Motor;`);
        Generator.addSetup(`Motor.Init`,`Motor.Init();`);
        Generator.addCode(`Motor.WuCha(${DJ1},${WUCHA});`);
  
    }

    //--------------电机模块-------------------//
    
    //% block="电机[DJ]速度[SUDU]" blockType="command"
    //% DJ.shadow="dropdown" DJ.options="DJ" DJ.defl="DJ.1"
    //% SUDU.shadow="range"   SUDU.params.min=-255    SUDU.params.max=255    SUDU.defl=150
    export function Motor(parameter: any, block: any) 
    {
        let DJ = parameter.DJ.code;
        let SUDU = parameter.SUDU.code;

        //Generator.addInclude('DC_Motor', '#include <DC_Motor.h>');//也可以使用
        Generator.addInclude('LBXQ_1', '#include <LBXQ_1.h>');//统一分类到LBXQ
        Generator.addObject( `Motor`, `DC_Motor`,`Motor;`);
        Generator.addSetup(`Motor.Init`,`Motor.Init();`);
        Generator.addCode(`Motor.MD(${DJ},${SUDU});`);
  
    }


    //--------------电机停止模块-------------------//

    //% block="电机[DJ]停止" blockType="command"
    //% DJ.shadow="dropdown" DJ.options="DJ" DJ.defl="1"
    export function MotorTZ(parameter: any, block: any) 
    {
        let DJ = parameter.DJ.code;
        Generator.addCode(`Motor.MD(${DJ},0);`);
    }
    /*空行*/
    //% block="---"
    export function kong_hang_001() {

    }

    //--------------LED灯模块，数字-------------------//

    //% block="LED灯[SZ_YINJIAO]状态[liangmie]" blockType="command"
    //% SZ_YINJIAO.shadow="dropdownRound" SZ_YINJIAO.options="SZ_YINJIAO" SZ_YINJIAO.defl="SZ_YINJIAO.2"
    //% liangmie.shadow="dropdownRound" liangmie.options="liangmie" liangmie.defl="liangmie.1"

    export function LED_SZ(parameter: any, block: any) 
    {
        let SZ_YINJIAO = parameter.SZ_YINJIAO.code;
        let liangmie = parameter.liangmie.code;

        Generator.addCode(`digitalWrite(${SZ_YINJIAO},${liangmie});`);
    }

    //--------------LED灯模块,模拟-------------------//

    //% block="LED灯[PWM_YINJIAO]亮度[liangdu]" blockType="command"
    //% PWM_YINJIAO.shadow="dropdownRound" PWM_YINJIAO.options="PWM_YINJIAO" PWM_YINJIAO.defl="PWM_YINJIAO.3"
    //% liangdu.shadow="range"   liangdu.params.min=0    liangdu.params.max=255    liangdu.defl=255

    export function LED_MN(parameter: any, block: any) 
    {
        let PWM_YINJIAO = parameter.PWM_YINJIAO.code;
        let liangdu = parameter.liangdu.code;

        Generator.addCode(`analogWrite(${PWM_YINJIAO},${liangdu});`);
    }

    //--------------蜂鸣器模块-------------------//

    //% block="蜂鸣器[SZ_YINJIAO]音调[STR]节拍[jiepai]" blockType="command"

    //% SZ_YINJIAO.shadow="dropdownRound" SZ_YINJIAO.options="SZ_YINJIAO" SZ_YINJIAO.defl="SZ_YINJIAO.2"
    //% STR.shadow="note" STR.defl=247
    //% jiepai.shadow="dropdownRound" jiepai.options="jiepai" jiepai.defl="jiepai.1"

    export function FMQ(parameter: any, block: any) 
    {
        let SZ_YINJIAO = parameter.SZ_YINJIAO.code
        let STR = parameter.STR.code
        let jiepai = parameter.jiepai.code

        Generator.addInclude('DFRobot_Libraries', '#include <DFRobot_Libraries.h>');
        Generator.addObject(`DFTone`, `DFRobot_Tone`, `DFTone;`);
        Generator.addCode(`DFTone.play(${SZ_YINJIAO},${STR},${jiepai});`);
    }
    //--------------蜂鸣器模块--音乐-----------------//

    //% block="蜂鸣器[SZ_YINJIAO]播放音乐[BF_Music]" blockType="command"

    //% SZ_YINJIAO.shadow="dropdownRound" SZ_YINJIAO.options="SZ_YINJIAO" SZ_YINJIAO.defl="SZ_YINJIAO.2"
    //% BF_Music.shadow="dropdownRound" BF_Music.options="BF_Music"

    export function FMQ_Music(parameter: any, block: any) 
    {
        let SZ_YINJIAO = parameter.SZ_YINJIAO.code
        let BF_Music = parameter.BF_Music.code

        Generator.addInclude('DFRobot_Libraries', '#include <DFRobot_Libraries.h>');
        Generator.addObject(`DFTone`, `DFRobot_Tone`, `DFTone;`);
        //Generator.addInclude('FMQ_Music', '#include <FMQ_Music.h>');
        Generator.addInclude('LBXQ_1', '#include <LBXQ_1.h>');//统一分类到LBXQ
        
        if(BF_Music == 0)
        {
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_0[0][0],Music_0[0][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_0[1][0],Music_0[1][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_0[2][0],Music_0[2][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_0[3][0],Music_0[3][1]);`);    
        }
        if(BF_Music == 1)
        {

            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[0][0],Music_1[0][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[1][0],Music_1[1][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[2][0],Music_1[2][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[3][0],Music_1[3][1]);`);   
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[4][0],Music_1[4][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[5][0],Music_1[5][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[6][0],Music_1[6][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[7][0],Music_1[7][1]);`); 
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[8][0],Music_1[8][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[9][0],Music_1[9][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[10][0],Music_1[10][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[11][0],Music_1[11][1]);`); 
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[12][0],Music_1[12][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[13][0],Music_1[13][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[14][0],Music_1[14][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[15][0],Music_1[15][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[16][0],Music_1[16][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[17][0],Music_1[17][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[18][0],Music_1[18][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[19][0],Music_1[19][1]);`);   
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[20][0],Music_1[20][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[21][0],Music_1[21][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[22][0],Music_1[22][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[23][0],Music_1[23][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[24][0],Music_1[24][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[25][0],Music_1[25][1]);`);
            
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[0][0],Music_1[0][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[1][0],Music_1[1][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[2][0],Music_1[2][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[3][0],Music_1[3][1]);`);   
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[4][0],Music_1[4][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[5][0],Music_1[5][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[6][0],Music_1[6][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[7][0],Music_1[7][1]);`); 
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[8][0],Music_1[8][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[9][0],Music_1[9][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[10][0],Music_1[10][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[11][0],Music_1[11][1]);`); 
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[12][0],Music_1[12][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[13][0],Music_1[13][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[14][0],Music_1[14][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[15][0],Music_1[15][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[16][0],Music_1[16][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[17][0],Music_1[17][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[18][0],Music_1[18][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[19][0],Music_1[19][1]);`);   
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[20][0],Music_1[20][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[21][0],Music_1[21][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[22][0],Music_1[22][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[23][0],Music_1[23][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[24][0],Music_1[24][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_1[25][0],Music_1[25][1]);`);

        }
        if(BF_Music == 2)
        {
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[0][0],Music_2[0][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[1][0],Music_2[1][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[2][0],Music_2[2][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[3][0],Music_2[3][1]);`);   
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[4][0],Music_2[4][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[5][0],Music_2[5][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[6][0],Music_2[6][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[7][0],Music_2[7][1]);`); 
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[8][0],Music_2[8][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[9][0],Music_2[9][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[10][0],Music_2[10][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[11][0],Music_2[11][1]);`); 
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[12][0],Music_2[12][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[13][0],Music_2[13][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[14][0],Music_2[14][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[15][0],Music_2[15][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[16][0],Music_2[16][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[17][0],Music_2[17][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[18][0],Music_2[18][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[19][0],Music_2[19][1]);`);   
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[20][0],Music_2[20][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[21][0],Music_2[21][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[22][0],Music_2[22][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[23][0],Music_2[23][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[24][0],Music_2[24][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[25][0],Music_2[25][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[26][0],Music_2[26][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[27][0],Music_2[27][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[28][0],Music_2[28][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[29][0],Music_2[29][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[30][0],Music_2[30][1]);`);
            Generator.addCode(`DFTone.play(${SZ_YINJIAO},Music_2[31][0],Music_2[31][1]);`);
            
        }
    }

    //--------------舵机模块-------------------//
    
    //% block="舵机[SZ_YINJIAO]角度[jiaodu]" blockType="command"

    //% SZ_YINJIAO.shadow="dropdownRound" SZ_YINJIAO.options="SZ_YINJIAO" SZ_YINJIAO.defl="SZ_YINJIAO.1"
    //% jiaodu.shadow="angle"   jiaodu.params.edge=1
    export function SFMotor(parameter: any, block: any) 
    {
        let SZ_YINJIAO = parameter.SZ_YINJIAO.code;
        let jiaodu = parameter.jiaodu.code;

        Generator.addInclude('DFRobot_Servo', '#include <DFRobot_Servo.h>');
        Generator.addObject( `servo_${SZ_YINJIAO}`, `Servo`,`servo_${SZ_YINJIAO};`);
        Generator.addSetup(`servo_${SZ_YINJIAO}.attach`,`servo_${SZ_YINJIAO}.attach(${SZ_YINJIAO});`);
        Generator.addCode(`servo_${SZ_YINJIAO}.angle(abs(${jiaodu}));`);
    }

    //**************************************************//
    //------------------输入设备----------------------//
    //*************************************************//
    /*
    //% block="【----下面是输入设备----】" blockType="hat"
    export function shurushebei(parameter: any, block: any) 
    */

    //--------------按键模块-------------------//

    //% block="按键[SZ_YINJIAO]状态[ANZHU]" blockType="boolean"
    //% SZ_YINJIAO.shadow="dropdownRound" SZ_YINJIAO.options="SZ_YINJIAO" SZ_YINJIAO.defl="1"
    //% ANZHU.shadow="dropdown" ANZHU.options="ANZHU" ANZHU.defl="1"
    
    export function anjian(parameter: any, block: any) 
    {
        let SZ_YINJIAO = parameter.SZ_YINJIAO.code;
        let ANZHU = parameter.ANZHU.code;

        Generator.addCode(`digitalRead(${SZ_YINJIAO}) == ${ANZHU}`);
    }


    //--------------红外线传感器模块-------------------//

    //% block="红外线传感器[SZ_YINJIAO]状态[YOUWU]" blockType="boolean"
    //% SZ_YINJIAO.shadow="dropdownRound" SZ_YINJIAO.options="SZ_YINJIAO" SZ_YINJIAO.defl="1"
    //% YOUWU.shadow="dropdown" YOUWU.options="YOUWU" YOUWU.defl="1"
    
    export function hongwai(parameter: any, block: any) 
    {
        let SZ_YINJIAO = parameter.SZ_YINJIAO.code;
        let YOUWU = parameter.YOUWU.code;

        Generator.addCode(`digitalRead(${SZ_YINJIAO}) == ${YOUWU}`);
    }

    /*空行*/
    //% block="---"
    export function kong_hang_002() {

    }

    //--------------PS手柄-------------------//

    //% block="初始化 PS2手柄 DAT[Dat]CMD[Cmd]CS[Cs]CLK[Clk]震动反馈[ZHENDONGFANKUI]" blockType="command"
    //% Dat.shadow="dropdown" Dat.options="Dat" Dat.defl="Dat.9"
    //% Cmd.shadow="dropdown" Cmd.options="Cmd" Cmd.defl="Cmd.10"
    //% Cs.shadow="dropdown" Cs.options="Cs" Cs.defl="Cs.11"
    //% Clk.shadow="dropdown" Clk.options="Clk" Clk.defl="Clk.12"
    //% ZHENDONGFANKUI.shadow="dropdown" ZHENDONGFANKUI.options="ZHENDONGFANKUI" ZHENDONGFANKUI.defl="ZHENDONGFANKUI.true"
    
    export function PS2(parameter: any, block: any) 
    {
        let Dat = parameter.Dat.code;
        let Cmd = parameter.Cmd.code;
        let Cs = parameter.Cs.code;
        let Clk = parameter.Clk.code;
        let ZHENDONGFANKUI = parameter.ZHENDONGFANKUI.code;

        Generator.addInclude('DFRobot_PS2X', '#include <DFRobot_PS2X.h>');
        Generator.addObject( `ps2x`, `DFRobot_PS2X`,`ps2x;`);
        Generator.addSetup(`ps2x.config_gamepad`,`ps2x.config_gamepad(${Clk},${Cmd},${Cs},${Dat},true,${ZHENDONGFANKUI});`);
        Generator.addSetup(`ps2x.config_gamepad_delay`,`delay(300);`);
    }

    //% block="PS2震动[ZHENDONGFANKUI]强度[ZD_qiangdu]" blockType="command"
    //% ZHENDONGFANKUI.shadow="dropdown" ZHENDONGFANKUI.options="ZHENDONGFANKUI" ZHENDONGFANKUI.defl="ZHENDONGFANKUI.false"
    //% ZD_qiangdu.shadow="range" ZD_qiangdu.params.min=0 ZD_qiangdu.params.max=255 ZD_qiangdu.defl=0
    export function PS2_ZhenDong(parameter: any, block: any) 
    {
        let ZHENDONGFANKUI = parameter.ZHENDONGFANKUI.code;
        let ZD_qiangdu = parameter.ZD_qiangdu.code;

        Generator.addInclude('DFRobot_PS2X', '#include <DFRobot_PS2X.h>');
        Generator.addObject( `ps2x`, `DFRobot_PS2X`,`ps2x;`);
        Generator.addCode(`ps2x.set_rumble(${ZHENDONGFANKUI},${ZD_qiangdu});`);
    }
    //% block="PS2刷新一次状态" blockType="command"
    export function PS2_Shuaxin(parameter: any, block: any) 
    {
        Generator.addInclude('DFRobot_PS2X', '#include <DFRobot_PS2X.h>');
        Generator.addObject( `ps2x`, `DFRobot_PS2X`,`ps2x;`);
        Generator.addCode(`ps2x.read_gamepad();`);
        Generator.addCode(`delay(30);`);
    }
    //% block="PS2按键[ANJIAN]状态为[PS2_ajzhuangtai]" blockType="boolean"
    //% ANJIAN.shadow="dropdown" ANJIAN.options="ANJIAN" ANJIAN.defl="ANJIAN.PSB_GREEN"
    //% PS2_ajzhuangtai.shadow="dropdown" PS2_ajzhuangtai.options="PS2_ajzhuangtai" PS2_ajzhuangtai.defl="PS2_ajzhuangtai.Button"
    export function PS2_AJZhuangTai(parameter: any, block: any) 
    {
        let ANJIAN = parameter.ANJIAN.code;
        let PS2_ajzhuangtai = parameter.PS2_ajzhuangtai.code;

        Generator.addInclude('DFRobot_PS2X', '#include <DFRobot_PS2X.h>');
        Generator.addObject( `ps2x`, `DFRobot_PS2X`,`ps2x;`);
        Generator.addCode(`ps2x.${PS2_ajzhuangtai}(${ANJIAN})`);
    }
    //% block="PS2摇杆[YAOGAN]" blockType="reporter"
    //% YAOGAN.shadow="dropdown" YAOGAN.options="YAOGAN" YAOGAN.defl="YAOGAN.PSS_RX"
    export function PS2_yaogan(parameter: any, block: any) 
    {
        let YAOGAN = parameter.YAOGAN.code;

        Generator.addInclude('DFRobot_PS2X', '#include <DFRobot_PS2X.h>');
        Generator.addObject( `ps2x`, `DFRobot_PS2X`,`ps2x;`);
        Generator.addCode(`ps2x.Analog(${YAOGAN})`);
    }
     //% block="---"
    export function kong_hang_01() {

    }

    //--------------硬件中断-------------------//
    //% block="硬件中断[Zhong_duan_PIN]模式[ZD_moshi]" blockType="hat"
    //% Zhong_duan_PIN.shadow="dropdown" Zhong_duan_PIN.options="Zhong_duan_PIN" Zhong_duan_PIN.defl="Zhong_duan_PIN.1"
    //% ZD_moshi.shadow="dropdown" ZD_moshi.options="ZD_moshi" ZD_moshi.defl="ZD_moshi.1"
    export function yingjian_ZD(parameter: any, block: any) {
        let Zhong_duan_PIN = parameter.Zhong_duan_PIN.code;
        let ZD_moshi = parameter.ZD_moshi.code;
        Zhong_duan_PIN = replace(Zhong_duan_PIN);
        ZD_moshi = replace(ZD_moshi);
        let name = 'attachInterrupt_fun_' + ZD_moshi + '_' + Zhong_duan_PIN;
      
        Generator.addEvent(name, "void", name, "", true);
        Generator.addSetup(`pinMode_${Zhong_duan_PIN}`,`pinMode(${Zhong_duan_PIN}, INPUT_PULLUP);`);
        Generator.addSetup(`attachInterrupt_${Zhong_duan_PIN}`,`attachInterrupt(digitalPinToInterrupt(${Zhong_duan_PIN}),attachInterrupt_fun_${ZD_moshi}_${Zhong_duan_PIN},${ZD_moshi});`);
        
    }
    function replace(str :string) {
        return str.replace("+", "");
    }

    //--------------定时中断------------------//
    //% block="定时中断 间隔时间[Zd_shijian]秒" blockType="hat"
    //% Zd_shijian.shadow="number"  Zd_shijian.defl=0
    export function dingshi_ZD(parameter: any, block: any) 
    {
        let Zd_shijian = parameter.Zd_shijian.code;
        Zd_shijian = replace(Zd_shijian);

        let name = 'flash';

        Generator.addInclude('MsTimer2', '#include <MsTimer2.h>');
        Generator.addEvent(name, "void", name, "", true);
        Generator.addSetup(`MsTimer2::set`,`MsTimer2::set(${Zd_shijian}*1000, flash);`);
        Generator.addSetup(`MsTimer2::start`,`MsTimer2::start();`);
        
    }
    function replace(str :string) {

        return str.replace("+", "");
    }

    //--------------定时中断-状态------------------//
    //% block="[dingshi_ZD_ZT]定时中断" blockType="command"
    //% dingshi_ZD_ZT.shadow="dropdown" dingshi_ZD_ZT.options="dingshi_ZD_ZT" dingshi_ZD_ZT.defl="dingshi_ZD_ZT.1"
    export function dingshi_ZD_ZT(parameter: any, block: any) 
    {
        let dingshi_ZD_ZT = parameter.dingshi_ZD_ZT.code;

        if(dingshi_ZD_ZT == 1)
            Generator.addCode(`MsTimer2::stop();`);
        else
            Generator.addCode(`MsTimer2::start();`);
    }
}