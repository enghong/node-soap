
import * as _ from 'lodash';
import { IHeaders, ISecurity } from '../types';

export class NTLMSecurity implements ISecurity {
  private defaults;

  constructor(defaults: any);
  constructor(username: any, password?: string, domain?: string, workstation?: string, customAuthenticationType?: string) {
    if (typeof username === 'object') {
      this.defaults = username;
      this.defaults.ntlm = true;
    } else {
      this.defaults = {
        ntlm: true,
        username: username,
        password: password,
        domain: domain,
        workstation: workstation,
        customAuthenticationType: customAuthenticationType,
      };
    }
  }

  public addHeaders(headers: IHeaders): void {
    headers.Connection = 'keep-alive';
  }

  public toXML(): string {
    return '';
  }

  public addOptions(options: any): void {
    _.merge(options, this.defaults);
  }
}
