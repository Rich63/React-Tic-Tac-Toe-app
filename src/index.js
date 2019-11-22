import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Change Square’s render method to show that value by replacing {/* TODO */} with {this.props.value}:
function Square(props) {
  return (
    <button
      className="square"
      onClick={ props.onClick }
    >
      { props.value }
    </button>
  );
}
  
  // In Board’s renderSquare method, change the code to pass a prop called value to the Square:
  class Board extends React.Component {
    // Note: In JavaScript classes, you need to always call super when defining 
    // the constructor of a subclass. All React component classes that have a 
    // constructor should start it with a super(props) call.
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      }
    }

    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({ 
        squares,
        xIsNext: !this.state.xIsNext,
      })
    }

    renderSquare(i) {
      return (
        <Square
          value={ this.state.squares[i] } 
          onClick={ () => this.handleClick(i) }
        />
      );
    }
  
    render() {
      const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  