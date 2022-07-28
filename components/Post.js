/* eslint-disable @next/next/no-img-element */
import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Moment from 'react-moment';
//import { useRecoilState } from 'recoil';

function Post({ id, post, postPage }) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div
      className='p-3 flex cursor-pointer border-b border-gray-700'
      onClick={() => router.push(`/${id}`)}
    >
      {!postPage && (
        <img
          src={post?.userImg}
          alt=''
          className='h-11 w-11 rounded-full mr-4'
        />
      )}
      <div className='flex flex-col space-y-2 w-full'>
        <div className={`flex ${!postPage && 'justify-between'}`}>
          {postPage && (
            <img
              src={post?.userImg}
              alt='Profile Pic'
              className='h-11 w-11 rounded-full mr-4'
            />
          )}
          <div className='text-[#6e767d]'>
            <div className='inline-block group'>
              <h4
                className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${
                  !postPage && 'inline-block'
                }`}
              >
                {post?.username}
              </h4>
              <span
                className={`text-sm sm:text-[15px] ${!postPage && 'ml-1.5'}`}
              >
                @{post?.tag}
              </span>
            </div>
            ·{' '}
            <span className='hover:underline text-sm sm:text-[15px]'>
              <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
            </span>
            {!postPage && (
              <p className='text-[#d9d9d9] text-[15px] sm:text-base mt-0.5'>
                {post?.text}
              </p>
            )}
          </div>
          <div className='icon group flex-shrink-0 ml-auto'>
            <DotsHorizontalIcon className='h-5 text-[#6e767d] group-hover:text-[#1d9bf0]' />
          </div>
        </div>
        {postPage && (
          <p className='text-[#d9d9d9] mt-0.5 text-xl'>{post?.text}</p>
        )}
        <img
          src={post?.image}
          alt=''
          className='rounded-2xl max-h-[700px] object-cover mr-2'
        />
        <div
          className={`text-[#6e767d] flex justify-between w-10/12 ${
            postPage && 'mx-auto'
          }`}
        >
          <div className='flex items-center space-x-1 group'>
            <div className='icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10'>
              <ChatIcon className='h-5 group-hover:text-[#1d9bf0]' />
            </div>
            <span className='group-hover:text-[#1d9bf0] text-sm'>{34}</span>
          </div>

          {session.user.uid === post?.id ? (
            <div className='flex items-center space-x-1 group'>
              <div className='icon group-hover:bg-red-600/10'>
                <TrashIcon className='h-5 group-hover:text-red-600' />
              </div>
            </div>
          ) : (
            <div className='flex items-center space-x-1 group'>
              <div className='icon group-hover:bg-green-500/10'>
                <SwitchHorizontalIcon className='h-5 group-hover:text-green-500' />
              </div>
            </div>
          )}

          <div className='flex items-center space-x-1 group'>
            <div className='icon group-hover:bg-pink-600/10'>
              <HeartIcon className='h-5 group-hover:text-pink-600' />
            </div>
            <span className={`group-hover:text-pink-600 text-sm`}>12</span>
          </div>

          <div className='icon group'>
            <ShareIcon className='h-5 group-hover:text-[#1d9bf0]' />
          </div>
          <div className='icon group'>
            <ChartBarIcon className='h-5 group-hover:text-[#1d9bf0]' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
