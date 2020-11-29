using Microsoft.EntityFrameworkCore.Migrations;

namespace Bid_A_Car_Prject.Migrations
{
    public partial class AddedIsSoLDColumnInVehicleClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageName",
                table: "Vehicle");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Vehicle",
                type: "varchar(300)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IsSold",
                table: "Vehicle",
                type: "varchar(5)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Vehicle",
                keyColumn: "VehicleID",
                keyValue: -3,
                column: "ImageUrl",
                value: "wwwroot/fordf150.jpg");

            migrationBuilder.UpdateData(
                table: "Vehicle",
                keyColumn: "VehicleID",
                keyValue: -2,
                column: "ImageUrl",
                value: "wwwroot/audiq5.jpg");

            migrationBuilder.UpdateData(
                table: "Vehicle",
                keyColumn: "VehicleID",
                keyValue: -1,
                column: "ImageUrl",
                value: "wwwroot/bmwx5.jpg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Vehicle");

            migrationBuilder.DropColumn(
                name: "IsSold",
                table: "Vehicle");

            migrationBuilder.AddColumn<string>(
                name: "ImageName",
                table: "Vehicle",
                type: "varchar(100)",
                nullable: true);
        }
    }
}
