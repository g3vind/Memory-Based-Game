// Steps for fisher yates algorithm

// Step 1: start from the last element of the array and loop through the first element

// step 2 : for each element at index i, generate random j between 0 and i(inclusive)

// step 3 : swap the element at index i with the element at index j

// step 4 : continue this step until all the elements are visited and swapped

// const myNumbers = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     // Math.random() : always gives value between 0 and 1
//     let j = Math.floor(Math.random() * (i + 1));
//     // console.log(i, j);
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// };

// One line code for above algorithm (i.e. for shuffling the cards)
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

for (let i = 0; i < shuffledChild.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffledChild[i].name;
  childDiv.style.backgroundImage = `url($shuffledChild[i].img)`;

  parentDiv.append(childDiv);
}

const shuffleNumber = myNumbers([1, 2, 3, 4, 5, 6]);
console.log(shuffleNumber);
