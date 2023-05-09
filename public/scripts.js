
document.addEventListener('DOMContentLoaded', main);
function main(){
    document.getElementById('gameForm').addEventListener('submit', (event) => {
        event.preventDefault(); 
      
        const rpsRadio = document.getElementById('rpsRadio');
        const rplsRadio = document.getElementById('rplsRadio');
        
    
        function getSelectedShootValue() {
        const shootRadioButtons = document.getElementsByName('shoot');
        let selectedValue;
    
        for (let i = 0; i < shootRadioButtons.length; i++) {
            if (shootRadioButtons[i].checked) {
            selectedValue = shootRadioButtons[i].value;
            break;
            }
        }
    
        return selectedValue;
        }
    
        if (rpsRadio.checked) {
            console.log("rps was selected")
            fetch('/app/rps/play?shot=' + getSelectedShootValue(), {
                method: 'GET',
            })
            .then(res => res.json()) 
            .then(data => {
                const result = data["result"];
                const resultDiv = document.getElementById("result");
                resultDiv.innerText = result;
                resultDiv.style.display = "inline";
            })
            .catch(error => {
                console.error('Error:', error);
            });
            
            
        } else if (rplsRadio.checked) {
            console.log("rpls was selected")
          window.location.href = '/app/rpsls';
        } else {
          alert('Please select a game mode.');
        }
      });
    
      document.getElementById("rpsRadio").addEventListener('click', (event) => {
        const views = ["rockView","scissorView","paperView"];
        views.forEach(view => {
            document.getElementById(view).style.display ="inline";
        })
        const removeViews = ["lizardView","spockView"]
        removeViews.forEach(view => {
            document.getElementById(view).style.display ="none";
        })
      });
    
      document.getElementById("rplsRadio").addEventListener('click', (event) => {
        console.log("onclick works")
        const views = ["rockView","scissorView","paperView","lizardView","spockView"];
        views.forEach(view => {
            document.getElementById(view).style.display ="inline";
        })
      })
    
      document.getElementById('refreshButton').addEventListener('click', () => {
        window.location.reload();
      });
    
    
}