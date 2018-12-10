export class StringUtil {

  public static koreanRegexp: RegExp = /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/;
  public static emailRegexp: RegExp = /^(\'.*\'|[A-Za-z0-9_-]([A-Za-z0-9_-]|[\+\.])*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z0-9][A-Za-z0-9_-]*(\.[A-Za-z0-9][A-Za-z0-9_-]*)+)$/;

  /**
   * Parameter is empty
   * @param param
   */
  public static isEmpty(param: string): boolean {
    return param && typeof param === 'string' && param.trim() === '';
  }

  /**
   * Parameter is not empty
   * @param param
   */
  public static isNotEmpty(param: string): boolean {
    return !StringUtil.isEmpty(param);
  }

  /**
   * Parameter is email
   * @param param
   * @returns {boolean}
   */
  public static isEmail(param: string): boolean {
    return param && param.match(StringUtil.emailRegexp) !== null;
  }

  public static isKorean(param: string): boolean {
    return param && param.match(StringUtil.koreanRegexp) !== null;
  }

  /**
   * Get thousand separator comma in string
   * @param param
   * @param separator
   * @returns {string}
   */
  public static thousandSeparatorNumber(param: string, separator: string = ','): string {
    return param.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }
}
