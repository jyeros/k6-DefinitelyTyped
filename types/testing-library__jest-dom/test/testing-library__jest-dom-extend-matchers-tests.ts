import matchers = require('@testing-library/jest-dom/matchers');

const element: HTMLElement = document.body;

expect.extend(matchers);

function customExpect(
    actual: HTMLElement,
): matchers.TestingLibraryMatchers<any, void> | matchers.TestingLibraryMatchers<any, Promise<void>> {
    throw new Error('Method not implemented.');
}

customExpect(element).toBeInTheDOM();
customExpect(element).toBeInTheDOM(document.body);
customExpect(element).toBeInTheDocument();
customExpect(element).toBeVisible();
customExpect(element).toBeEmpty();
customExpect(element).toBeDisabled();
customExpect(element).toBeEnabled();
customExpect(element).toBeInvalid();
customExpect(element).toBeRequired();
customExpect(element).toBeValid();
customExpect(element).toContainElement(document.body);
customExpect(element).toContainElement(null);
customExpect(element).toContainHTML('body');
customExpect(element).toHaveAttribute('attr');
customExpect(element).toHaveAttribute('attr', true);
customExpect(element).toHaveAttribute('attr', 'yes');
customExpect(element).toHaveClass();
customExpect(element).toHaveClass('cls1');
customExpect(element).toHaveClass('cls1', 'cls2', 'cls3', 'cls4');
customExpect(element).toHaveClass('cls1', { exact: true });
customExpect(element).toHaveDisplayValue('str');
customExpect(element).toHaveDisplayValue(['str1', 'str2']);
customExpect(element).toHaveDisplayValue(/str/);
customExpect(element).toHaveDisplayValue([/str1/, 'str2']);
customExpect(element).toHaveFocus();
customExpect(element).toHaveFormValues({ foo: 'bar', baz: 1 });
customExpect(element).toHaveStyle('display: block');
customExpect(element).toHaveStyle({ display: 'block', width: 100 });
customExpect(element).toHaveTextContent('Text');
customExpect(element).toHaveTextContent(/Text/);
customExpect(element).toHaveTextContent('Text', { normalizeWhitespace: true });
customExpect(element).toHaveTextContent(/Text/, { normalizeWhitespace: true });
customExpect(element).toHaveValue();
customExpect(element).toHaveValue('str');
customExpect(element).toHaveValue(['str1', 'str2']);
customExpect(element).toHaveValue(1);
customExpect(element).toHaveValue(null);
customExpect(element).toBeChecked();
customExpect(element).toHaveDescription('some description');
customExpect(element).toHaveDescription(/some description/);
customExpect(element).toHaveDescription(expect.stringContaining('partial'));
customExpect(element).toHaveDescription();
customExpect(element).toHaveAccessibleDescription('some description');
customExpect(element).toHaveAccessibleDescription(/some description/);
customExpect(element).toHaveAccessibleDescription(expect.stringContaining('partial'));
customExpect(element).toHaveAccessibleDescription();

customExpect(element).toHaveAccessibleErrorMessage();
customExpect(element).toHaveAccessibleErrorMessage('Invalid time: the time must be between 9:00 AM and 5:00 PM');
customExpect(element).toHaveAccessibleErrorMessage(/invalid time/i);
customExpect(element).toHaveAccessibleErrorMessage(expect.stringContaining('Invalid time'));

customExpect(element).toHaveAccessibleName('a label');
customExpect(element).toHaveAccessibleName(/a label/);
customExpect(element).toHaveAccessibleName(expect.stringContaining('partial label'));
customExpect(element).toHaveAccessibleName();
customExpect(element).toHaveErrorMessage('Invalid time: the time must be between 9:00 AM and 5:00 PM');
customExpect(element).toHaveErrorMessage(/invalid time/i);
customExpect(element).toHaveErrorMessage(expect.stringContaining('Invalid time'));

customExpect(element).not.toBeInTheDOM();
customExpect(element).not.toBeInTheDOM(document.body);
customExpect(element).not.toBeInTheDocument();
customExpect(element).not.toBeVisible();
customExpect(element).not.toBeEmpty();
customExpect(element).not.toBeEmptyDOMElement();
customExpect(element).not.toBeDisabled();
customExpect(element).not.toBeEnabled();
customExpect(element).not.toBeInvalid();
customExpect(element).not.toBeRequired();
customExpect(element).not.toBeValid();
customExpect(element).not.toContainElement(document.body);
customExpect(element).not.toContainElement(null);
customExpect(element).not.toContainHTML('body');
customExpect(element).not.toHaveAttribute('attr');
customExpect(element).not.toHaveAttribute('attr', true);
customExpect(element).not.toHaveAttribute('attr', 'yes');
customExpect(element).not.toHaveClass();
customExpect(element).not.toHaveClass('cls1');
customExpect(element).not.toHaveClass('cls1', 'cls2', 'cls3', 'cls4');
customExpect(element).not.toHaveClass('cls1', { exact: true });
customExpect(element).not.toHaveDisplayValue('str');
customExpect(element).not.toHaveDisplayValue(['str1', 'str2']);
customExpect(element).not.toHaveDisplayValue(/str/);
customExpect(element).not.toHaveDisplayValue([/str1/, 'str2']);
customExpect(element).not.toHaveFocus();
customExpect(element).not.toHaveFormValues({ foo: 'bar', baz: 1 });
customExpect(element).not.toHaveStyle('display: block');
customExpect(element).not.toHaveTextContent('Text');
customExpect(element).not.toHaveTextContent(/Text/);
customExpect(element).not.toHaveTextContent('Text', { normalizeWhitespace: true });
customExpect(element).not.toHaveTextContent(/Text/, { normalizeWhitespace: true });
customExpect(element).not.toHaveValue();
customExpect(element).not.toHaveValue('str');
customExpect(element).not.toHaveValue(['str1', 'str2']);
customExpect(element).not.toHaveValue(1);
customExpect(element).not.toBeChecked();
customExpect(element).not.toHaveDescription('some description');
customExpect(element).not.toHaveDescription();
customExpect(element).not.toHaveAccessibleDescription('some description');
customExpect(element).not.toHaveAccessibleDescription();

customExpect(element).not.toHaveAccessibleErrorMessage();
customExpect(element).not.toHaveAccessibleErrorMessage('There is no date');
customExpect(element).not.toHaveAccessibleErrorMessage(/everything is valid/i);

customExpect(element).not.toHaveAccessibleName('a label');
customExpect(element).not.toHaveAccessibleName();
customExpect(element).not.toBePartiallyChecked();
customExpect(element).not.toHaveErrorMessage();
customExpect(element).not.toHaveErrorMessage('Pikachu!');
