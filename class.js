// С точки зрения SOLID можно объявление класса и вызовы его методов (файл js.js)
// разнести по разным файлам. Здесь - объявление класса, вызов методов в calls.js.

class Device {
  constructor(name) {
    this.kind = 'Электроприбор ';
    this.voltage = 220;
    this.name = name;
  }
  turnedOn(name, turnedOn, strength) {
    let power = Math.round(this.voltage * strength);
    let str = this.kind + name + ' на ' + this.voltage + ' Вольт ';
    if (turnedOn) {
      return str + 'включен в розетку и потребляет ' + power + ' Ватт.';
    } else {
      return str + 'выключен из розетки.';
    }
  }
};
