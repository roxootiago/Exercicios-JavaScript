const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * * * * * ", () =>
  console.log("Executando tarefa1: ", new Date().getSeconds())
); /* scheduleJob(segundos(se vier com barra indica de tempo em tempo) minuto hora dia do mês mês dia da semana) */

const segundaTarefa = () => {
  const regra = new schedule.RecurrenceRule();
  regra.dayOfWeek = [new schedule.Range(1, 5)]; /* de segunda à sexta */
  regra.hour = [new schedule.Range(8, 24)];
  regra.second = [new schedule.Range(0, 59, 2)];

  const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log("Execuntando Tarefa 2: ", new Date().getSeconds());
  });
};

setTimeout(function () {
  tarefa1.cancel();
  console.log("Cancelando Tarefa 1!");
  segundaTarefa();
}, 10000);
