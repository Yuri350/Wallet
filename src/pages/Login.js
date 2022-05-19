import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userEmail } from '../actions';
import store from '../store';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      isButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (prev) => {
    const { email } = this.state;
    const { history } = this.props;

    prev.preventDefault();
    store.dispatch(userEmail(email));
    history.push('/carteira');
  }

  // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value }, () => {
      const { email, senha } = this.state;
      const SIX = 6;

      console.log('senha', senha.length);

      if (this.validateEmail(email) && senha.length >= SIX) {
        this.setState({
          isButton: false,
        });
      } else {
        this.setState({
          isButton: true,
        });
      }
    });
  }

  render() {
    const { isButton } = this.state;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            onChange={ this.handleChange }
          />

          <input
            data-testid="password-input"
            type="senha"
            name="senha"
            onChange={ this.handleChange }
          />
          <button type="submit" disabled={ isButton }>Entrar</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null)(Login);
