export class RandomGenerator {
  static string(): string {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < 15; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static randomPassword() {
    let result = '';
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const passwordLength = 10;

    for (let i = 0; i < 15; i++) {
      result += charset.charAt(Math.floor(Math.random() * passwordLength));
    }

    return result;
  }
}
