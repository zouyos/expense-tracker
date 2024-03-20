export class ValidatorService {
  static min(value, min) {
    if (value.length < min) {
      return `Min ${min} characters`;
    }
  }

  static max(value, max) {
    if (value.length > max) {
      return `Max ${max} characters`;
    }
  }

  static positive(value) {
    if (value <= 0) {
      return `Price should be > 0`;
    }
  }

  static number(value) {
    if (isNaN(value)) {
      return `Price should be a number`;
    }
  }
}
