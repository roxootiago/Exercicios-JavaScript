const schedule = require("node-schedule")

const tarefa1 = schedule.scheduleJob('*/3 * 10 * * 3', () => console.log('Executando tarefa1', new Date().getSeconds()))/* scheduleJob(segundos(se vier com barra indica de tempo em tempo) minuto hora dia do mês mês dia da semana) */

setTimeout(function () {
    tarefa1.cancel()
    console.log("Cancelando Tarefa 1!")
}, 10000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] /* de segunda à sexta */
regra.hour = 10
regra.second = 0

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log("Execuntando Tarefa 2!", new Date().getSeconds())
})