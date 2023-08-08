// DESCRIPTION:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r: number, g: number, b: number) {
  function convert(letter: number) {
    if (letter > 0 && letter <= 255) {
      function verifyValues(num: number): string {
        let aux: string = '';
        if (num >= 10) {
          switch (num) {
            case 10:
              aux = 'a';
              break;
            case 11:
              aux = 'b';
              break;
            case 12:
              aux = 'c';
              break;
            case 13:
              aux = 'd';
              break;
            case 14:
              aux = 'e';
              break;
            case 15:
              aux = 'f';
              break;
          }
        } else {
          aux = num.toString();
        }
        return aux;
      }

      const hexLeft = [];
      hexLeft[0] = Math.floor(letter / 16);
      hexLeft[1] = verifyValues(hexLeft[0]);

      const hexRight = [];
      hexRight[0] = Math.floor(letter % 16);
      hexRight[1] = verifyValues(hexRight[0]);

      return `${hexLeft[1]}${hexRight[1]}`;
    } else if (letter > 255) {
      return 'FF';
    } else {
      return '00';
    }
  }

  return [convert(r), convert(g), convert(b)].join('').toUpperCase();
}

console.log(rgb(255, -20, 300));
