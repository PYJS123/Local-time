window.onload = () => {
  let time = new Date();
  document.getElementById('time').innerHTML = timeify(time);
  setInterval(() => {
    let time = new Date();
    document.getElementById('time').innerHTML = timeify(time);
  }, 1000);
  document.body.style = `background-image: url('${parseInt(new Date().getHours) > 18 || (parseInt(new Date().getHours) < 6)?('https://raw.githubusercontent.com/PYJS123/Rubbish-Bin/main/d59q8dp-aee975cb-64fb-41d2-8742-0d2a3cdd5851.png'):('https://raw.githubusercontent.com/PYJS123/Rubbish-Bin/main/162-1621242_night-sky-digital-art.png')}')`;
  setInterval(() => {
    document.body.style = `background-image: url('${(parseInt(new Date().getHours) > 18 || parseInt(new Date().getHours) < 6)?('https://raw.githubusercontent.com/PYJS123/Rubbish-Bin/main/d59q8dp-aee975cb-64fb-41d2-8742-0d2a3cdd5851.png'):('https://raw.githubusercontent.com/PYJS123/Rubbish-Bin/main/162-1621242_night-sky-digital-art.png')}')`;
  }, 5000);
}

function timeify(timeClass) {
  let h = _0(timeClass.getHours(), true),
      oh = _0(timeClass.getHours()),
      m = _0(timeClass.getMinutes()),
      s = _0(timeClass.getSeconds());
  return `${h}:${m}:${s} ${(parseInt(oh)>12)?('PM'):('AM')}`
}

function _0(num, isHours=false) {
  newNum = num;
  if (isHours == true && num > 12) {
    newNum = num % 12;
    return newNum.toString();
  }
  let str = newNum.toString();
  if (str.length == 1) {
    str = '0' + str;
  }
  return str;
}

// Morning background: https://raw.githubusercontent.com/PYJS123/Rubbish-Bin/main/d59q8dp-aee975cb-64fb-41d2-8742-0d2a3cdd5851.png, https://deviantart.com
// Evening background: https://raw.githubusercontent.com/PYJS123/Rubbish-Bin/main/162-1621242_night-sky-digital-art.png, https://www.teahub.io/
