#ifndef _DC_Motor_H_
#define _DC_Motor_H_

#include "Arduino.h"

#define uchar unsigned char
#define uint unsigned int

#define M1S 5   //速度
#define M1F 7   //方向
#define M2S 6   //速度
#define M2F 8   //方向


class DC_Motor
{
  public:
    void Init();  /*初始化*/
    void DC_Motor::WuCha(String DJ1,int WUCHA);
    void DC_Motor::MD(String DJ,int SUDU);
};

#endif
