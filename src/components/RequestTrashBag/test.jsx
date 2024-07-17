import Postcode from '@actbase/react-daum-postcode';

<Postcode
    style={{ width: '100%', height: '100%' }}
    jsOptions={{ animation: true }}
    onSelected={data => alert(JSON.stringify(data))}
/>