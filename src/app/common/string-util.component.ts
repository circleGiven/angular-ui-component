export class StringUtil {

  /**
   * Parameter is empty
   * @param param
   */
  public static isEmptyString(param: string): boolean {
    return param && typeof param === 'string' && param.trim() === '';
  }

  /**
   * Parameter is not empty
   * @param param
   */
  public static isNotEmptyString(param: string): boolean {
    return !StringUtil.isEmptyString(param);
  }
}
