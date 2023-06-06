<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\CaseCategory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        foreach ($this->caseCategories() as $value) {
            CaseCategory::create($value);
        }
    }

    private function caseCategories()
    {
        return [
            [
                "name" => "Anti-Dumping Duty",
                "slug" => "anti-dumping",
            ],
            [
                "name" => "(Customs Valuation) (Dispute Settlement) Regulations, 2019 (L.I 2382)",
                "slug" => "customs-valuation",
            ],
            [
                "name" => "Countervailing Duty",
                "slug" => "subsidy-and-countervailing-measures",
            ],
            [
                "name" => "Safeguard Measures",
                "slug" => "safeguards-measures",
            ],
            [
                "name" => "Miscellaneous",
                "slug" => "miscellaneous",
            ],
        ];
    }
}