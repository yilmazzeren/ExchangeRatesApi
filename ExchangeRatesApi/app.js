// Elementleri Seçme

const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Currency("USD","TRY");
const ui = new UI(firstSelect,secondSelect);

eventListeners();

function eventListeners(){
    // İnput değiştiği zaman.(amount inputu)
    amountElement.addEventListener("input",exchangeCurrency);
    
    // İlk selectListin değeri değiştiğinde. Burada addEventlis kullanamıyoruz. Çünkü bazı browserlarda sıkıntı olabılıyor.
    firstSelect.onchange = function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    };


    // İkinci selectList değeri değiştiğinde çalışacak fonk.
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };


}

function exchangeCurrency(){

    // console.log("Event Oluştu."); Deneme amaçlı. İnput değiştiğini onayladım.
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result => {

        ui.displayResult(result);

    })
 
    .catch(err => console.log(err));
}
