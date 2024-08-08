// App.jsx
import { useState } from 'react';
import OtpInput from './components/OtpInput';

function App() {
  const [otp, setOtp] = useState('');

  const handleChangeOTP = (newOTP) => {
    setOtp(newOTP);
  };

  return (
    <div className="p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-5">Enter OTP</h1>
      <OtpInput length={6} onChangeOTP={handleChangeOTP} />
      <h1 className="text-3xl font-bold mt-5">Entered OTP: {otp}</h1>
    </div>
  );
}

export default App;
