import React from 'react'
import { BsPencil } from 'react-icons/bs'

const UserPage = () => {
  return (
    <div className="rounded-lg shadow border __montserat-text border-gray-200 bg-white p-5">
      <div className="mb-11">
        <div className="font-semibold">Profile Saya</div>
        <div className="text-sm text-subtitle">
          Kelola informasi profil Anda untuk mengontrol, melindungi dan
          mengamankan akun
        </div>
      </div>
      <div className="flex justify-between border-b-8 border-gray-200 pb-16">
        <div className="flex">
          <div>
            <img
              src="/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png"
              alt="profile_pict"
              className="w-48 h-48 object-cover rounded-md"
            />
            <div className="mt-5">
              <button className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full">
                Edit Profile
                <span>
                  <BsPencil className="ml-2 text-sm" />
                </span>
              </button>
            </div>
          </div>
          <div className="ml-12">
            <div>
              <div className="font-semibold">Biodata</div>
              <div className="grid grid-cols-2 gap-x-11 gap-y-4 text-sm text-subtitle mt-3">
                <div>Nama</div>
                <div>James Adam</div>
                <div>Tanggal Lahir</div>
                <div>16 Juni 1992</div>
                <div>Email</div>
                <div>jamesadam@gmail.com</div>
                <div>no. tlpn</div>
                <div>+62 8122233424</div>
                <div>Nama Toko</div>
                <div>GENTON SHOP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center  mt-10">
        <div className="text-xs text-gray-400 font-medium text-center max-w-screen-sm">
          Pengguna terdaftar sesuai degan{' '}
          <span className="text-warning">syarat dan Kondisi</span> yang berlaku
          ITernak, apabila membutuhkan bantuan silahkan menghubungi{' '}
          <span className="text-warning">IternakCare</span>{' '}
        </div>
      </div>
    </div>
  )
}

export default UserPage
