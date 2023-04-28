<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // We are going to use this class to render React components

Route::get('/', function () {
    return Inertia::render('MasterLayoutAuth');
});

Route::get('/admin/dashboard', function () {
    return Inertia::render('DashboardAdmin');
});

Route::get('/admin/profile', function () {
    return Inertia::render('Profile');
});

Route::get('/admin/tentangAplikasi', function () {
    return Inertia::render('TentangAplikasiAdmin');
});

Route::get('/admin/pelayananPelanggan', function () {
    return Inertia::render('PelayananPelangganAdmin');
});
