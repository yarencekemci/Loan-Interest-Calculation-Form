/* 1. Begin
2. Define variables.
3. Assign values to variables.
4. Perform necessary conditional checks, if applicable.
5. Execute the loop if there is one.
6. Perform calculations.
7. Print the result.
8. End */ 
function krediHesapla()
{
    var cekilecekTutar,vadeSayisi;
    var aylikTaksit,odenecekToplamTutar;
    cekilecekTutar=document.getElementById("txtKrediTutari").value;
    var liste= document.getElementById("listeVade");
    vadeSayisi=liste.options[liste.selectedIndex].value;

    if(vadeSayisi==12)
    {
        odenecekToplamTutar=cekilecekTutar*1.1;
    }
    else if(vadeSayisi==24)
    {
        odenecekToplamTutar=cekilecekTutar*1.2;
    }
    else if(vadeSayisi==36)
    {
        odenecekToplamTutar=cekilecekTutar*1.3;
    }
    else if(vadeSayisi==48)
    {
        odenecekToplamTutar=cekilecekTutar*1.4;
    }
    aylikTaksit=odenecekToplamTutar/vadeSayisi;

    document.querySelector("#sonuc").innerHTML="Geri ödeme toplami: "+odenecekToplamTutar+"<br>"+
    "Aylik taksit tutariniz: "+aylikTaksit.toFixed(2);


}