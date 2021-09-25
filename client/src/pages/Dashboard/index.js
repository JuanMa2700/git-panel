import React, { useState } from 'react';
import ProfileCard from '../../components/ProfileCard';
import ReposList from '../../components/ReposList';
import useLocalStorage from '../../hooks/UseLocalStorage';

export default function Dashboard() {
  const [user] = useLocalStorage('auth');
  const [currentRepository, setCurrentRepository] = useState(0);
  const repositories = [
    {
      title: 'It is a long established fact',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      title: 'Etiam sollicitudin pellentesque',
      description:
        'Sed tortor orci, porttitor id nunc sed, venenatis egestas augue. Mauris cursus, lacus vitae feugiat scelerisque, ipsum eros blandit dui, at laoreet ipsum sem commodo lacus. Etiam eget venenatis nunc. Aliquam nulla sapien, dapibus a tincidunt vel, pulvinar a sem. Donec hendrerit sem eget lorem sollicitudin, in imperdiet arcu congue. Vivamus ultricies tortor varius purus efficitur, et lobortis eros scelerisque. Suspendisse non venenatis sem. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      title: 'Long puncti establd fact',
      description:
        'Cras mattis velit quis risus tristique, sit amet condimentum est ultrices. Phasellus faucibus massa nulla. Integer non dapibus nisi, in feugiat tortor. Pellentesque ultricies purus nec nunc euismod facilisis. Donec tellus neque, condimentum ultricies sodales vel, maximus nec urna. Morbi et porta neque., Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      title: 'Al ergo en ipsus bantle',
      description:
        'Etiam vel rhoncus metus. Sed auctor turpis sed tincidunt euismod. Nulla lectus est, pulvinar sed sollicitudin at, maximus in libero. Quisque dignissim imperdiet erat sed tincidunt .Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
  ];
  return (
    <div className='container d-flex flex-row p-5'>
      <div className='col-md-4 col-sm-12'>
        <ProfileCard user={user} />
        <p
          className='mt-5 px-5'
          style={{
            textAlign: 'center',
            fontSize: '15px',
            maxHeight: '340px',
            overflowY: 'auto',
          }}
        >
          {repositories[currentRepository].description}
        </p>
      </div>
      <div className='col-md-8 col-sm-12'>
        <ReposList
          repositories={repositories}
          selectCurrent={setCurrentRepository}
        />
      </div>
    </div>
  );
}
