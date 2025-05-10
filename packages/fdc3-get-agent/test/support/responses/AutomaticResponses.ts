import { InstanceID } from '@finos/fdc3-web-impl';
import { TestServerContext } from '../TestServerContext';

export interface AutomaticResponse {
  filter: (t: string) => boolean;
  action: (input: object, m: TestServerContext, from: InstanceID) => Promise<void>;
}
