import Hello from '~/components/Hello';

const verifyLintingWorks = () => {
  // Test code below to confirm the linting is working
  const log = (message: string) => {
    // Unexpected console statement.
    console.log(message);
  };

  interface Props {
    prop1: string;
    prop2: string;
    // prettier-ignore
  }

  // 'func1' is declared but its value is never read.
  const func1 = (props: Props) => {
    const { prop1 } = props;

    // Remove below line to see the issue, disabled it so that eslint does not fix this
    // Use object destructuring.
    // eslint-disable-next-line prefer-destructuring
    const prop2 = props.prop2;

    // Unexpected console statement.
    console.log(prop1, prop2);

    if (prop1) {
      return;
    }

    // eslint-disable-next-line curly
    if (prop1) return;

    const arrayFormatted = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    // prettier-ignore
    const arrayNotFormatted = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ];
  };

  const message = 123;
  // Argument of type 'number' is not assignable to parameter of type 'string'.
  log(message);
  // Expected 1 arguments, but got 0.
  log();
};

function App() {
  verifyLintingWorks();

  return <Hello />;
}

export default App;
