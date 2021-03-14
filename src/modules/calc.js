const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');


    // const outNum = (num, elem) => {
    //     const time = 1;
    //     const step = 1;
    //     clearInterval(interval);
    //     let el = document.querySelector(elem);
    //     el.textContent = 0;
    //     let t = Math.round(time / (num / step));
    //     let interval = setInterval(() => {
    //         el.textContent = (el.textContent * 1) + step;
    //         if (el.textContent > num) {
    //             el.textContent = num;
    //             clearInterval(interval);
    //             interval = 0;
    //         }
    //     }, t);
    // }

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }
        totalValue.textContent = Math.ceil(total);
        console.log('total:' + total);
        // outNum(Math.floor(total), '#total');
    };

    calcBlock.addEventListener('change', (e) => {
        const target = e.target;
        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });

};

export default calc;