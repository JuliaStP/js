const allBlocks = document.querySelector('.blocks');
const inputsNumber = document.querySelector('.inputs__number');
const inputsColor = document.querySelector('.inputs__color');

inputsNumber.addEventListener('change', e => {
    const quantity = e.target.value;
    let markup = '';

    for (let i = 0; i < quantity; i++) {
        const block = document.createElement('div');
        block.classList = 'block';
        block.innerText = i + 1;

        markup += block.outerHTML;
    }

    allBlocks.innerHTML = markup;
})

const colorBlock = (block, color) => {
    block.style.backgroundColor = color;
}

let change = false;

inputsColor.addEventListener('change', e => {
    const color = e.target.value;
    const blocks = allBlocks.querySelectorAll('.block');

    change = !change;

    for (let i = 0; i < blocks.length; i++) {
        const currentBlock = blocks[i];
        const blockNumber = i + 1;

        if (change) {
            if (blockNumber % 2 !== 0) {
                colorBlock(currentBlock, color);
            } else {
                colorBlock(currentBlock, '#fff');
            }
        } else {
            if (blockNumber % 2 === 0) {
                colorBlock(currentBlock, color);
            } else {
                colorBlock(currentBlock, '#fff');
            }
        }
    }
});