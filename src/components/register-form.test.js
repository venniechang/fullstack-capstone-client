import React from 'react';
import {shallow} from 'enzyme';

import RegisterForm from './register-form';

describe('<RegisterForm />', () => {
	it('Renders without crashing', () => {
		shallow(<LoginForm />);
	})
})