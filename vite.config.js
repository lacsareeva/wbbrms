import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/style.css',
                'resources/css/index.css',
                'resources/css/registerStyle.css',
                'resources/css/DashboardStyle.css',
                'resources/css/DBcontentStyle.css',
                'resources/css/AnnouncmentStyle.css',
                'resources/css/reportStyles.css',
                'resources/css/blotterStyles.css',
                'resources/css/borrowedStyle.css',
                'resources/css/account.css',
                'resources/css/profile.css',
                'resources/css/resident.css',
                'resources/css/recordStyles.css',
                'resources/css/recordCertificate.css',
                'resources/js/records.js',
                'resources/js/ResidentAndOfficials.js',
                'resources/js/profile.js',
                'resources/js/account.js',
                'resources/js/borrowed.js',
                'resources/js/Blotter.js',
                'resources/js/report.js',
                'resources/js/Announcement.js',
                'resources/js/app.js',
                'resources/js/DBscript.js',
                'resources/js/ResidentScripts/dashboardScripts.js',
                'resources/js/ResidentScripts/residentScripts.js',
                'resources/css/ResidentStyles/dashboardStyle.css',
                'resources/css/ResidentStyles/announcementStyles.css',
                'resources/css/ResidentStyles/brgyOfficials.css',
                'resources/css/ResidentStyles/registerStyle.css',
                'resources/css/ResidentStyles/loginStyle.css',
                'resources/js/ResidentScripts/announcementScripts.js',
                'resources/js/ResidentScripts/blotterScripts.js',
                'resources/js/ResidentScripts/borrowedScripts.js',
                'resources/js/ResidentScripts/recordScripts.js',
                'resources/js/ResidentScripts/reportScripts.js',
            ],
    
              buildDirectory: 'build',
            refresh: true,
        }),
        viteStaticCopy({
            targets: [
                { src: 'resources/image', dest: '' }, // Copies to public/images
            ],
        }),
    ],
      build: {
        manifest: true,  
        outDir: 'public/build', 
        rollupOptions: {
            input: {
                main: 'resources/js/app.js',
                style: 'resources/css/style.css',
                index: 'resources/css/index.css',
                registerStyle: 'resources/css/registerStyle.css',
                DashboardStyle: 'resources/css/DashboardStyle.css',
                DBcontentStyle: 'resources/css/DBcontentStyle.css',
                AnnouncmentStyle: 'resources/css/AnnouncmentStyle.css',
                reportStyles: 'resources/css/reportStyles.css',
                blotterStyles: 'resources/css/blotterStyles.css',
                borrowedStyle: 'resources/css/borrowedStyle.css',
                account: 'resources/css/account.css',
                profile: 'resources/css/profile.css',
                resident: 'resources/css/resident.css',
                recordStyles: 'resources/css/recordStyles.css',
                recordCertificate: 'resources/css/recordCertificate.css',
                dashboardStyle: 'resources/css/ResidentStyles/dashboardStyle.css',
                announcementStyles: 'resources/css/ResidentStyles/announcementStyles.css',
                brgyOfficials: 'resources/css/ResidentStyles/brgyOfficials.css',
                registerStyleResident: 'resources/css/ResidentStyles/registerStyle.css',
                loginStyle: 'resources/css/ResidentStyles/loginStyle.css',
                records: 'resources/js/records.js',
                ResidentAndOfficials: 'resources/js/ResidentAndOfficials.js',
                profileJS: 'resources/js/profile.js',
                accountJS: 'resources/js/account.js',
                borrowedJS: 'resources/js/borrowed.js',
                BlotterJS: 'resources/js/Blotter.js',
                reportJS: 'resources/js/report.js',
                AnnouncementJS: 'resources/js/Announcement.js',
                DBscript: 'resources/js/DBscript.js',
                dashboardScripts: 'resources/js/ResidentScripts/dashboardScripts.js',
                residentScripts: 'resources/js/ResidentScripts/residentScripts.js',
                announcementScripts: 'resources/js/ResidentScripts/announcementScripts.js',
                blotterScripts: 'resources/js/ResidentScripts/blotterScripts.js',
                borrowedScripts: 'resources/js/ResidentScripts/borrowedScripts.js',
                recordScripts: 'resources/js/ResidentScripts/recordScripts.js',
                reportScripts: 'resources/js/ResidentScripts/reportScripts.js',
            },
        },
    },
});
