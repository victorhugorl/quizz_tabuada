function randint(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function table() {
    let number = 2
    array = []
    while(number <= 9){
        for(let i= 2; i <= 9; i++ ){

            array.push({
                question: `${number}x${i}`,
                answer:`${number*i}`
            })
        }
    number+= 1
    }
    return array
};

function criaQuizz(array){
    return {
        question: document.querySelector('.question'),
        title: document.querySelector('.title'),
        form: document.querySelector('form'),
        userAnswer: document.querySelector('.answer'),
        message: document.querySelector('.message'),

        start() {
            this.makeQuestion()
            this.listenButton()
        },

        array: array,

        listenButton(){
            this.form.addEventListener('submit', e => {
                this.checkAnswer();
            })
        },

        makeQuestion(){
            
            if (this.array.length > 0){
                console.log(this.array.length)
                this.title.innerHTML= 'Qual é o resultado ?'
        
                this.n = randint(0,array.length-1);
                this.question.innerHTML= array[this.n]['question']
            
            } else {
                this.title.innerHTML = 'Parabéns, você terminou os estudos por hoje'
            }
        },

        checkAnswer(){
    
            if (this.userAnswer.value === array[this.n]['answer']) {
                this.message.classList.remove('wrong')
                this.message.classList.add('correct')
                this.message.innerHTML = 'Parabéns você acertou'
                this.userAnswer.value = ''
                this.array.splice(this.n,1)
                this.makeQuestion()
        
            }else{
                this.message.classList.remove('correct')
                this.message.classList.add('wrong')
                this.message.innerHTML = `Errou a questão
                 \n
                 a resposta de ${array[this.n]['question']} é: ${array[this.n]['answer']}`
                
                this.userAnswer.value = ''
                this.makeQuestion()
            }

        }


    }
}
array = table()
const quizz = criaQuizz(array)
quizz.start()




