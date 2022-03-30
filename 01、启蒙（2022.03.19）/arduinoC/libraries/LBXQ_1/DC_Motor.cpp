#include "DC_Motor.h"

int WUCHA_MA = 0; //误差变量
int WUCHA_MB = 0; //误差变量

/*
 * 初始化
*/
void DC_Motor::Init()
{
  pinMode(M1S,OUTPUT);
  pinMode(M1F,OUTPUT);
  pinMode(M2S,OUTPUT);
  pinMode(M2F,OUTPUT);
}
/*
* 马达误差调试
*/
void DC_Motor::WuCha(String DJ1,int WUCHA)
{
  if (DJ1 == "MA")
    WUCHA_MA += WUCHA;

  else if (DJ1 == "MB")
    WUCHA_MB += WUCHA;
}
/*
 * 马达
*/
void DC_Motor::MD(String DJ,int SUDU)
{

  if (DJ == "ALL")
  {
    if ( SUDU > 0)
    {
      digitalWrite(7,1);
      digitalWrite(8,1);
      analogWrite(5,abs(SUDU + WUCHA_MA));
      analogWrite(6,abs(SUDU + WUCHA_MB));
    }
    else if (SUDU < 0)
    {
      digitalWrite(7,0);
      digitalWrite(8,0);
      analogWrite(5,abs(SUDU + WUCHA_MA));
      analogWrite(6,abs(SUDU + WUCHA_MB));
    }
    else
    {
      digitalWrite(7,1);
      digitalWrite(8,1);
      analogWrite(5,abs(SUDU));
      analogWrite(6,abs(SUDU));
    }
  }

  else if (DJ == "MA")
  {
    if ( SUDU > 0)
    {
      digitalWrite(7,1);
      analogWrite(5,abs(SUDU + WUCHA_MA));
    }
    else if ( SUDU < 0)
    {
      digitalWrite(7,0);
      analogWrite(5,abs(SUDU + WUCHA_MA));
    }
    else
    {
      digitalWrite(7,1);
      analogWrite(5,abs(SUDU));
    }
  }
  
  else if (DJ == "MB")
  {
    if ( SUDU > 0)
    {
      digitalWrite(8,1);
      analogWrite(6,abs(SUDU + WUCHA_MB));
    }
    else if ( SUDU < 0)
    {
      digitalWrite(8,0);
      analogWrite(6,abs(SUDU + WUCHA_MB));
    }
    else
    {
      digitalWrite(8,1);
      analogWrite(6,abs(SUDU));
    }
  }
}
