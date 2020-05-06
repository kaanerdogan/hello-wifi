# Hello Wifi
>In this README, Turkish explanation comes first. If you look for English [click here](#english)

# Türkçe

Telefonunuzun, seçtiğiniz Wi-Fi ağına bağlandığı zaman bazı görevleri yerine getirmesini sağlar. 

Şimdilik, telefon sadece titreşim moduna geçiyor.

Geliştirmesi [Ionic](https://ionicframework.com) ile yapılıyor

## Gelecek Özellikler

* Seçilen Wi-Fi ağına bağlandığında __alarm__ çalma ([detay](#alarm-detay))
* Seçilen Wi-Fi ağına bağlandığında seçilen kişiye __SMS__ gönderme ([detay](#sms-detay))

## Özellik Detayları

Bu özellikler arasında (muhtemelen) uygulamanın en altında bulunan sekmeler sayesinde geçilecek. 

## Alarm Detay
* Alarm çalınması istenen Wi-Fi ağı seçilir.
* Ağa bağlandıktan kaç dakika sonra alarmın çalması gerektiği belirlenir. (Varsayılan olarak hemen alarm çalar)
* Alarm çalarken gösterilmesi gereken metin girilir. (İsteğe bağlı)

## SMS Detay
* Bağlandıktan sonra SMS gönderilmesi istenen ağ seçilir.
* Ağa bağlandıktan kaç dakika sonra SMS'in gönderilmesi gerektiği seçilir. (Varsayılan olarak hemen SMS gönderilir)
* SMS gönderilmesi gereken kişi seçilir.
* SMS metni yazılır.

# Yükleme
APK bir websitesi aracılığıyla ya da Google Play'e gönderilmişse linki paylaşılacaktır.

O zamana kadar;

Mobil cihaza yükleyebilmek için paylaşılan dökümanlara [buradan](https://ionicframework.com/docs/developing/previewing) ulaşabilirsiniz.


# English

> Burası README dosyasının İngilizce tarafı. Bu metni Türkçe de gözlemleyebilirsiniz. Türkçe için [tıklayın](#türkçe).

Allows your phone to perform certain tasks when connected to the Wi-Fi network you selected.

For now, the only feature is vibrate mode.

Developing in [Ionic](https://ionicframework.com)

# Feature Goals

* __Alarm__ when selected Wi-Fi network connected. ([detail](#alarm-detail))
* Send __SMS__ to selected person when selected Wi-Fi network connected. ([detail](#sms-detail))

# Feature Details
This features will be (probably) swichable by tabs that positioned at bottom of application.

## Alarm Detail

* Select Wi-Fi from list.
* Select how many minutes after alarm should play (default: 0)
* Enter text to show when alarm goes play. (optional)

## SMS Detail

* Select Wi-Fi from list.
* Select how many minutes should past after connecting to send SMS (default: 0)
* Select person to send SMS.
* Enter text.

# Installation

APK will be published in my website or on Google Play. 

Until then;

To native build [ionic docs](https://ionicframework.com/docs/developing/previewing)