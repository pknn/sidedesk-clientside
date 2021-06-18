import 'jest-ts-auto-mock'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({
  adapter: new Adapter(),
})
