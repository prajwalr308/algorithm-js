function clearBit(num, bit) {
    const mask=~(1 << bit);
    return num&mask;
  }
      
  