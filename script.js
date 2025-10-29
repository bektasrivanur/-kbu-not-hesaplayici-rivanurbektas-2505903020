document.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        hesapla();
      }
    });

function hesapla() {
    let vize = parseFloat(document.getElementById("vize").value);
    let final = parseFloat(document.getElementById("final").value);
    let but = parseFloat(document.getElementById("but").value);
    let devamsiz = document.getElementById("f1").checked;
     let secilen = document.querySelector('input[name="radio1"]:checked');
    let sinavaGirdim = secilen ? secilen.value : null;

    let finalNotu = document.getElementById("finalNotu");
    let ortalamaYazi = document.getElementById("ortalama");
    let harfYazi = document.getElementById("harf");

    finalNotu.innerHTML = "";
    ortalamaYazi.innerHTML = "";
    harfYazi.innerHTML = "";  

    
      if (devamsiz) {
        finalNotu.innerHTML = "Devamsızsılıktan kaldınız!";
        finalNotu.className = "kal";
        ortalamaYazi.innerHTML = "Ortalama: 0";
        harfYazi.innerHTML = "Harf Notu: F1";
        return;
      }
      
      if (sinavaGirdim === "hayir") {
        finalNotu.innerHTML = "Genel/Bütünlemeye girmediğiniz için kaldınız!";
        finalNotu.className = "kal";
        ortalamaYazi.innerHTML = "Ortalama: 0";
        harfYazi.innerHTML = "Harf Notu: F2";
        return;
      }

     if (vize < 50) {
        finalNotu.innerHTML = "Vizeniz 50 den düşük olduğu için kaldınız.";
        finalNotu.className = "kal";
        ortalamaYazi.innerHTML = "Ortalama: 0";
        harfYazi.innerHTML = "Harf Notu: F3";
        return;
    } 

       if (final < 50) {
        finalNotu.innerHTML = "Finaliniz 50 den düşük olduğu için kaldınız.";
        finalNotu.className = "kal";
        ortalamaYazi.innerHTML = "Ortalama: 0";
        harfYazi.innerHTML = "Harf Notu: F3";
       return;
    }

     if (isNaN(vize)) {
        alert("Vize ve final notu gerekli!");
        return;
      }

      if (isNaN(final) && isNaN(but)) {
    alert("Final veya Bütünleme notu gerekli!");
    return;
  }

      if (vize < 0 || vize > 100) { alert("Vize 0-100 arası olmalı!"); return; }
      if (!isNaN(final) && (final < 0 || final > 100)) { alert("Final 0-100 arası olmalı!"); return; }
      if (!isNaN(but) && (but < 0 || but > 100)) { alert("Bütünleme 0-100 arası olmalı!"); return; }

      let sinav = isNaN(but) ? final : but;
      let basari = (0.4 * vize + 0.6 * sinav).toFixed(2);
        
      if (basari < 60) {
    finalNotu.textContent = "Başarı puanınız 60'dan düşük olduğu için kaldınız.";
    finalNotu.className = "kal";
    ortalamaYazi.textContent = "Ortalama: " + basari;
    harfYazi.textContent = "Harf Notu: F3";
    return;
  }

      finalNotu.innerHTML = "Geçtiniz!";
      finalNotu.className = "gec";
      ortalamaYazi.innerHTML = "Ortalama: " + basari;

      let harf = "";
      if (basari < 65) harf = "C";
      else if (basari < 70) harf = "B2";
      else if (basari < 80) harf = "B1";
      else if (basari < 90) harf = "A2";
      else harf = "A1";

      harfYazi.innerHTML = "Harf Notu: " + harf;
    }

function sifirla() {
      document.getElementById("vize").value = "";
      document.getElementById("final").value = "";
      document.getElementById("but").value = "";
      document.getElementById("f1").checked = false;
      document.querySelector('input[name="radio1"]').value;
      document.querySelectorAll('input[name="radio1"]').forEach(r => r.checked = false);

      document.getElementById("finalNotu").innerHTML = "";
      document.getElementById("ortalama").innerHTML = "";
      document.getElementById("harf").innerHTML = "";
    }