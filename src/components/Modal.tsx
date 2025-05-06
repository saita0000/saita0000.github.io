import { useState } from 'preact/hooks';

interface WorkModalProps {
  image: string;
  title: string;
  description: string;
}

export default function WorkModal({ image, title, description }: WorkModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const click = () => {
    setIsOpen(true);
    console.log('Modal opened');
  };

  return (
    <>
      <div onClick={click} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <img src={image} alt={title} width="150" height="130" />
        <p style={{ fontSize: "1.1vw" }}>{title}</p>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: 'white', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', maxWidth: '70vw', gap: '20px' }}
          >
            <img src={image} alt={title} width="400"  height="200"/>
            <div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
                  &times;
                </button>
              </div>
              <h2>{title}</h2>
              <p style={{ color: 'grey', lineHeight: '2' }}>
                {description.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
