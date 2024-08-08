# React OTP Component

`App.jsx`

- **Purpose**: Main component displaying OTP input and entered OTP.

- **State**: `otp` (tracks the entered OTP).

- **Handler**: `handleChangeOTP` updates the OTP state.

- **Layout**: Displays OTP input and shows entered OTP below.

`OtpInput.jsx`

- **Purpose**: Component for OTP input fields.
- **State**: otp (array of OTP digits).
- **Handlers**:
  - `handleChange`: Updates OTP on input change and moves focus.
  - `handleBackspace`: Handles backspace key, updates OTP, and refocuses.

**Props**:

- `length`: Number of OTP input fields.
- `onChangeOTP`: Callback function to pass updated OTP to parent.

**Rendering**: Renders an array of input fields based on length, with styles and functionality for single-character input and focus management.
