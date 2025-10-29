# Proje açıklaması
-Proje KBÜ kurallarına göre vize-final ortalamasına,devamsızlık durumu veya devam olmasına rağmen sınava girmeme durumuna göre geçme veya kalma hesaplama projesidir.

# KBÜ kurallarına göre not hesaplama
-  Başarı Notu = Vize notu %40, Final/Bütünleme notu %60 oranında alınır.  
- Vize ve final notları 0–100 arasında olmalıdır.
- Öğrencinin devamsız olması durumunda notu hesaplanmaz ve F1 harf notu ile kalır.  
- Öğrenci genel veya bütünlemeye girmemişse, F2 harf notu ile kalır.  
- Vize ya da final notu 50’nin altında olan veya Başarı notu %60'ın altı olan öğrenciler F3 harf     notu alarak başarısız sayılır.  
- Harf notu aralıkları:
  Başarı Notu | Harf Notu
    90–100        A1 
    80–89         A2
    70–79         B1 
    65–69         B2 
    60–64         C 
     <60          F3

# Nasıl çalıştırılır
-İlk olarak projenin canlı demo linkinden projeyi açıyoruz.
-Daha sonra gerekli alanları Yıl içi/Vize,Final/Bütünleme,Devamsız varsa devamsız,en sondaki Genel/Bütünleme sınavı yerini sınavlara girildiyse evet, deavm var ama sınavlara girilmediyese hayır'a basılacak.(Devamasız işaretlendiyse yine aynı şekilde hayır'a basılacak.)
-Enter tuşuna basınca hesaplama yapılır ve ortalama ve geçme durumu butonun aşağısında görülür.
-Sıfırla butonu enter ile deil, fare ile basınca çalışır.

# Test senaryoları
1. Yıl içi 70, Final 60
![Test Senaryosu 1](images/test1.png)
2. Yıl içi 95, Final 48
![Test Senaryosu 2](images/test2.png)
3. Yıl içi 58, Bütünleme 55 (Final girilmemiş)
![Test Senaryosu 3](images/test3.png)
4. Devamsız işaretli → F1 (Kaldı)
![Test Senaryosu 4](images/test4.png)
5. Devam var, sınava girmedi = Hayır → F2 (Kaldı).
![Test Senaryosu 5](images/test5.png)
