const listOfSpecies = document.querySelectorAll ('ol');

for (const dinosaurs of listOfSpecies){
 dinosaurs.addEventListener ('click', function (event){
     const selecteddinosaur = event.target;
     selecteddinosaur.style.textDecoration ='line-through'; 
 })
}
const listOfSpecies2 = document.querySelectorAll ('ul');

for (const species of listOfSpecies2){
    species.addEventListener ('click', function (event){
        const selectedSpecies = event.target;
        selectedSpecies.style.opacity = '0.2';

    })
}

const picturesOfDinosaur = document.querySelectorAll ('#row');

for (const pictures of picturesOfDinosaur){
    pictures.addEventListener ('click', function (event){
        const selectedPicture = event.target;
        selectedPicture.style.display = 'none';
    })
}

const massExtinction = document.querySelector("#destroy-all");
const allSelected = document.querySelectorAll ('.feature');
function affectsAll (){
    for (const char of allSelected){
       
        massExtinction.addEventListener ('click', affectsAll)
    }
}

