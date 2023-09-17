#include <Wire.h>

int condVal;
int v1,v2;
int SAMPLES = 20;
int i=0;
float s_val[20];
float sampleSum =0.0;
float sqDevSum = 0.0;
char caracter;
string palabra;


void setup()
{
 analogWrite(9,51);
 Serial.begin(9600);
}
 
void loop ()
{
 
  condVal = analogRead(A0);  
  float voltage = condVal*(1/1023.0);

  if (voltage!=0 && i<SAMPLES){
    s_val[i] = voltage;
    sampleSum += s_val[i];

  if(i==SAMPLES-1){
  float meanSample = sampleSum/float(SAMPLES);
  
  for(int j = 0; j < SAMPLES; j++) {
    sqDevSum += pow((meanSample - float(s_val[j])), 2);
  }
  float stDev = sqrt(sqDevSum/float(SAMPLES));
  
  Serial.print("Average voltage of 20 non-zero values:");
  Serial.println(meanSample,5);
  Serial.println("");
  Serial.print(" and Standard deviation:");
  Serial.println(sqDevSum,5);
  sampleSum =0;
  sqDevSum=0;
  }
  i=(i+1)%SAMPLES;
   
  } 
  // put your main code here, to run repeatedly:
 if(Serial.available()) {
  caracter = Serial.read();
  palabra = palabra + caracter;

     Serial.println(palabra);
     if (palabra.indexOf("current on")>= 0){digitalWrite(Pin9, HIGH); palabra = "";}
     if (palabra.indexOf("current off")>= 0){digitalWrite(Pin9, LOW); palabra = "";}  
     delay(100);
  } 
}