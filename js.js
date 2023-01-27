// Исправления в этом коде можно отнести к соблюдению требований DRY (повторяющийся код в return функции turnedOn
// можно вынести в строковую переменную) и требований KISS (для читабельности кода лучше вынести определение new Device за
// пределы функции console.log()).

// Было:

class Device {
  constructor(name) {
    this.kind = 'Электроприбор ';
    this.voltage = 220;
    this.name = name;
  }

  turnedOn(name, turnedOn, strength) {
    let power = Math.round(this.voltage * strength);
    if (turnedOn) {
      return (this.kind + name + ' на ' + this.voltage + ' Вольт ' + 'включен в розетку и потребляет ' + power + ' Ватт.')
    } else {
      return (this.kind + name + ' на ' + this.voltage + ' Вольт ' + 'выключен из розетки.' + '\n')
    }
  }
};


console.log(new Device('conditioner').turnedOn('кондиционер', true, 10));
console.log(new Device('freezer').turnedOn('морозилка', false, 4));


// Стало (изменим название класса для избежания проблем):

class Device2 {
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

const conditioner = new Device2('conditioner').turnedOn('кондиционер', true, 10);
const freezer = new Device2('freezer').turnedOn('морозилка', false, 4);

console.log(conditioner);
console.log(freezer);

// -----------------------------------------------------------------------------------